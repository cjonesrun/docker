var Sequelize = require('sequelize');

var sequelize = new Sequelize('testing', 'cj', 'cj', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
  
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const Op = Sequelize.Op;

const User = sequelize.define("nodeuser", {
  firstName: {
    type: Sequelize.STRING,
    field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
  },
  lastName: {
    type: Sequelize.STRING,
    field: 'last_name' // Will result in an attribute that is firstName when user facing but first_name in the database
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});


User.sync({force: true}).then(() => {
	// Table created
	return User.create({
		firstName: 'John',
		lastName: 'Hancock'
	});
}).then(() => { 
	return User.create({
		firstName: 'Jane',
		lastName: 'Hancock'
	});
}).then(() => { 
	return User.create({
		firstName: 'Jim',
		lastName: 'Hancock'
	});
}).then( () => {
	return User.findAll(
		{ where: { [Op.or]: [{firstName: 'Jane'}]}}).then((users) => {
		for (user in users)
		{
			console.log("USER:", JSON.stringify(users[user]));
		}
	});
}).finally( () => {
	console.log("closing!");
	sequelize.close();
	console.log("done");
});
