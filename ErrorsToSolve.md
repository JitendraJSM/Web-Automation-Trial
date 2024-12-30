### 1.1 page.getPageName() Funciton

    This function doesn't get changed on different pages on okWinHomepage or on loginPage which ever first created it always give the same result. So the polymorphism on this method is not working as expected.

--- Only error 1.1 is solved, getPageName() method is changed to .pageName property,
In pageFactory the way to identify page using page's url and pageClass's url is upgraded.

### 1.2 Each time new page is created, when pageFactory is called. even page was created before, it creates new page.

    Each time new page created that's why each time when pageFactory called then currentindex = 0 which creates a big problem
    To solve above problem new branch i created a new branch Bug-1.2
    * Bug-1.2 is solved by implementing pageStack in automationEngine.module.js not on page.module.js itself as this will be same in all browser.
