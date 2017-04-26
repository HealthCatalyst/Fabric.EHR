# Fabric.EHR

This is a web service that renders HTML to show in the Fabric Pane in the EHR.

Pre-requisites:
1. SQL Server running on localhost with a user, nodeuser and password, ILoveNode2017.  (These can be changed in sqlclient.js) 
2. Create a new database called InsightsDatabase
3. Run included sql script: sql/2-createtables.sql
4. Populate some sample data by running sql script: sql/5-addsampledata.sql

Run the web service:
1. cd server
2. npm start

The webservice runs on http://localhost:3000

To test it, open the following in a web browser: http://localhost:3000/fabricpane/1
