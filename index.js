const mongoose = require('mongoose');
mongoose.connect('"mongodb+srv://mastatan:g1zSKnBnE3iGSuSS@globant.pwzsxpf.mongodb.net/?retryWrites=true&w=majority";', { useNewUrlParser: true, useUnifiedTopology: true });

const Entry = mongoose.model('asociados');

mongoose.connection.once('open', async () => {
  try {
    const entries = await Entry.find();
    entries.forEach(entry => {
      console.log(entry);
    });
    mongoose.connection.close();
  } catch (error) {
    console.error('Error al consultar la base de datos:', error);
  }
});
