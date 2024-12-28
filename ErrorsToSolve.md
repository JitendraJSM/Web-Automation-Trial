### 1.1 page.getPageName() Funciton

    This function doesn't get chenged on different pages on okWinHomepage or on loginPage which ever first created it always give the same result. So the polymorphism on this method is not working as expected.

--- Only error 1.1 is solved, getPageName() method is changed to .pageName property,
In pageFactory the way to identify page using page's url and pageClass's url is upgraded.

### 1.2 Each time new page is created, when pageFactory is called. even page was created before, it creates new page.
