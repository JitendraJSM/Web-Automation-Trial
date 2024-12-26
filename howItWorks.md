# How it works :

1. Starts from index.js

   - Imports
     - db from database,
     - AutomationApp class to instanciate browser as app,
     - pageFactory from page.module.js to find page's current state,

2. main() function of index.js
   - Instanciates app,
   - calls app.init(),
