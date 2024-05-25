// Required for dotenv
require('dotenv').config();

// Required for Express
const express = require('express');
const app = express();
const path = require('path');

// Required for Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Setting where the location of your EJS files are
app.set('views', path.join(__dirname));

// Needed for EJS
app.set('view engine', 'ejs');

// Needed for public directory
app.use(express.static(path.join(__dirname, 'public')));

// Needed for parsing form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root page
app.get('/', async (req, res) => {
  res.render('index');
});

app.get('/page2', (req, res) => {
  res.render('page2');
});

app.get('/page3', async (req, res) => {
  const objectives = await prisma.objective.findMany({
    include: {
      keyResults: {
        include: {
          cheers: true
        }
      }
    }
  });
  res.render('page3', { objectives });
});

// Add objective route
app.post('/add-objective', async (req, res) => {
  const { name, keyResults } = req.body;
  try {
    const createdObjective = await prisma.objective.create({
      data: {
        name: name,
        keyResults: {
          create: keyResults.map(kr => ({
            name: kr.name,
            owner: kr.owner,
            endDate: new Date(kr.endDate),
            progress: kr.progress
          }))
        }
      }
    });
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating objective");
  }
});

// Add cheer route
app.post('/add-cheer', async (req, res) => {
  const { keyResultId, message } = req.body;
  try {
    await prisma.cheer.create({
      data: {
        keyResultId: parseInt(keyResultId),
        message: message
      }
    });
    res.redirect('/page3');
  } catch (error) {
    console.error(error);
    res.status(500).send("Error adding cheer");
  }
});

// Add OKR route
app.post('/api/okr', async (req, res) => {
  const { objective, keyResult, owner, endDate, progress } = req.body;

  try {
    const createdObjective = await prisma.objective.create({
      data: {
        name: objective,
        keyResults: {
          create: {
            name: keyResult,
            owner: owner,
            endDate: new Date(endDate),
            progress: progress
          }
        }
      }
    });
    res.status(201).json({ message: 'OKR saved successfully', data: createdObjective });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error saving OKR");
  }
});

// Tells the app which port to run on
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});