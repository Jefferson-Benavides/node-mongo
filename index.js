const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tu_base_de_datos', { useNewUrlParser: true, useUnifiedTopology: true });

const Entry = mongoose.model('Entry');

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
