# How to Test the CosmosDB Implementation

The project already includes all the necessary code for working with CosmosDB. 
However, you need an **Azure Cosmos DB Account** or you can install the **CosmosDB emulator** locally (download link: https://aka.ms/cosmosdb-emulator).

## Setup Connection
Configure the application's connection to the database by following these steps:

1. In **App.config**, insert your account endpoint and key.
2. In **Startup.cs**, comment out the line that registers the LiteDB implementation (*line #37*).
3. In **Startup.cs**, uncomment the line that registers the CosmosDB implementation (*line #38*).
4. In **Startup.cs**, uncomment the lines related to the CosmosDB initializer (*line #49*).
5. In **CosmoDB.cs**, change the value of **DATABASE_NAME** to the required name.

The database will be created and populated upon the first run. 
After completing all the above steps, the sample should build and run without any problems.