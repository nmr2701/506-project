# 506-project


Project purpose: The purpose of the project is to create an application that would allow researchers in Biology at Boston University to share findings in Microbiomes from their research through a web application. The web application will allow users to search for data based on filters and display a series of informational, statistical inferences and plots which would deliver insights on the underlying data.

Project tasks: The project can be broken down into the following high level tasks:
Scripting and cleaning: Scripts will need to be written responsible for reading the CSV files in which the research data is currently saved in, processing that data and storing it into a database.
Full stack application: A front-end interface that will allow the user to search, filter and view the findings. A backend that can perform fetch operations from the database, dynamically create a dataframe on the underlying data, perform statistical methods on the dataframe and return the response to the client.


Clear goal(s) (e.g. Successfully predict the number of students attending lecture based on the weather report).
  - Predict the abundance of a plant pathogen across the United States based off pH and temperature

    
What data needs to be collected and how you will collect it (e.g. scraping xyz website or polling students).
  - CSVs

    
How you plan on modeling the data (e.g. clustering, fitting a linear model, decision trees, XGBoost, some sort of deep learning method, etc.).
  -  Multivariate regression of abundance using multiple predictors


How do you plan on visualizing the data? (e.g. interactive t-SNE plot, scatter plot of feature x vs. feature y).
  - Scatter plots (pH and temp as x) (abundance as y), filter by biome
  - 
What is your test plan? (e.g. withhold 20% of data for testing, train on data collected in October and test on data collected in November, etc.).
 - Standard 80 - 20 split on available data



**Edit**
https://raw.githubusercontent.com/zoey-rw/soil_microbe_GEMs/refs/heads/master/comets_shinyapp_example/species_abundance_filt.csv

there is a bunch of data to use all in

https://github.com/zoey-rw/soil_microbe_GEMs/tree/master/comets_shinyapp_example

