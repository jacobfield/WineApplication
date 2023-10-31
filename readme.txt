WINES:
Get all: http://localhost:6789/wines
Wine Search by ID: http://localhost:6789/wines1
Wine Search by name: http://localhost:6789/wines/wine_name/Pinot%20Collapso
Wine Search by colour: http://localhost:6789/wines?white
Post new wine: http://localhost:6789/wines
{
  "wine_name": "Meg's Egg",
  "colour": "Rose",
  "grape_type": "Syrah",
  "year": 2008
}

Update wine by ID: http://localhost:6789/wines/3

Delete wine by ID: http://localhost:6789/wines/3

DESCRIPTIONS:
get all: http://localhost:6789/descriptions
get description by ID: http://localhost:6789/descriptions/1
create description: http://localhost:6789/descriptions
{
  "description_id": "2",
  "wine_description": "Test data2",
  "rating": 50,
  "maker": "Myrkle"
}
update description by Id: http://localhost:6789/descriptions/2
{
  "wine_id": "2",
  "wine_description": "Fresh from the Meg herself",
  "rating": 99,
  "maker": "Meg's Hedgehogs"
}

delete description by ID: http://localhost:6789/descriptions/2