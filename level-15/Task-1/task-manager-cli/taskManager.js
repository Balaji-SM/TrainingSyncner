const fs = require('fs');
const yargs = require('yargs');

const tasksFilePath = './tasks.json';

const loadTasks = async () => {
  try {
    const data = await fs.promises.readFile(tasksFilePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

const saveTasks = async (tasks) => {
  try {
    await fs.promises.writeFile(tasksFilePath, JSON.stringify(tasks, null, 2));
  } catch (error) {
    console.error('Error saving tasks:', error);
  }
};
const addTask = async (title, description, status = 'pending', dueDate = '') => {
    const tasks = await loadTasks();
  
    const newTask = {
      id: tasks.length + 1, 
      title,
      description,
      status,
      dueDate,
    };
  
    tasks.push(newTask);
    await saveTasks(tasks);
    console.log(`Task "${title}" added successfully!`);
  };

  const listTasks = async (statusFilter = '') => {
    const tasks = await loadTasks();
    const filteredTasks = statusFilter
      ? tasks.filter(task => task.status === statusFilter)
      : tasks;
  
    if (filteredTasks.length === 0) {
      console.log('No tasks found.');
    } else {
      filteredTasks.forEach(task => {
        console.log(`ID: ${task.id}, Title: ${task.title}, Status: ${task.status}, Due Date: ${task.dueDate || 'N/A'}`);
      });
    }
  };
  
  const updateTask = async (id, updates) => {
    const tasks = await loadTasks();
    const taskIndex = tasks.findIndex(task => task.id === parseInt(id));
  
    if (taskIndex === -1) {
      console.log('Task not found!');
      return;
    }
  
    const updatedTask = { ...tasks[taskIndex], ...updates };
    tasks[taskIndex] = updatedTask;
    await saveTasks(tasks);
    console.log(`Task with ID ${id} updated successfully!`);
  };
  
  yargs
  .command(
    'add',
    'Add a new task',
    {
      title: {
        description: 'Title of the task',
        alias: 't',
        type: 'string',
      },
      description: {
        description: 'Description of the task',
        alias: 'd',
        type: 'string',
      },
      status: {
        description: 'Status of the task',
        alias: 's',
        choices: ['pending', 'completed'],
        default: 'pending',
      },
      dueDate: {
        description: 'Due date of the task',
        alias: 'r',
        type: 'string',
      },
    },
    async (argv) => {
      await addTask(argv.title, argv.description, argv.status, argv.dueDate);
    }
  )
  .command(
    'list',
    'List all tasks',
    {
      status: {
        description: 'Filter tasks by status',
        alias: 's',
        choices: ['pending', 'completed'],
        type: 'string',
      },
    },
    async (argv) => {
      await listTasks(argv.status);
    }
  )
  .command(
    'update',
    'Update an existing task',
    {
      id: {
        description: 'ID of the task to update',
        alias: 'i',
        type: 'number',
        demandOption: true,
      },
      title: {
        description: 'New title of the task',
        alias: 't',
        type: 'string',
      },
      description: {
        description: 'New description of the task',
        alias: 'd',
        type: 'string',
      },
      status: {
        description: 'New status of the task',
        alias: 's',
        choices: ['pending', 'completed'],
      },
      dueDate: {
        description: 'New due date of the task',
        alias: 'r',
        type: 'string',
      },
    },
    async (argv) => {
      const updates = {
        title: argv.title,
        description: argv.description,
        status: argv.status,
        dueDate: argv.dueDate,
      };
      await updateTask(argv.id, updates);
    }
  )
  .command(
    'delete',
    'Delete a task',
    {
      id: {
        description: 'ID of the task to delete',
        alias: 'i',
        type: 'number',
        demandOption: true,
      },
    },
    async (argv) => {
      await deleteTask(argv.id);
    }
  )
  .help().argv;
