function generateTabsAndContent() {
    // Select the first container
    const container = document.querySelectorAll('.container')[1];
    const tabsContainer = document.createElement('div');
    tabsContainer.classList.add('tabs');
    container.appendChild(tabsContainer);

    // Create tabs
    tabData.forEach((tab, index) => {
        const button = document.createElement('button');
        button.classList.add('tablink', 'tm-text-gold');
        button.textContent = tab.title;
        button.setAttribute('onclick', `openPage('${tab.id}', this, '${tab.color}')`);
        tabsContainer.appendChild(button);

        // Set id="defaultOpen" for the first tab button
        if (index === 0) {
            button.id = 'defaultOpen';
        }
    });

    // Select the second container
    const contentContainer = document.querySelectorAll('.container')[1];

    // Create tab content
    tabData.forEach((tab, index) => {
        const tabContent = document.createElement('div');
        tabContent.classList.add('tabcontent');
        tabContent.id = tab.id; // Remove spaces from title for id

        const flexContainer = document.createElement('div');
        flexContainer.classList.add('flex', 'flex-col', 'lg:flex-row', 'justify-around', 'items-center');

        const mainContainer = document.createElement('div');
        mainContainer.classList.add('flex-1', 'm-5', 'rounded-xl', 'px-4', 'py-6', 'sm:px-8', 'sm:py-10', 'tm-bg-brown', 'tm-item-container');

        const menuItems = tab.items;

        menuItems.forEach(item => {
            const menuItemContainer = document.createElement('div');
            menuItemContainer.classList.add('flex', 'items-start', 'mb-6', 'tm-menu-item');

            const img = document.createElement('img');
            img.src = item.image;
            img.alt = 'Image';
            img.classList.add('rounded-md');
            menuItemContainer.appendChild(img);

            const contentContainer = document.createElement('div');
            contentContainer.classList.add('ml-3', 'sm:ml-6');

            const title = document.createElement('h3');
            title.textContent = item.title;
            title.classList.add('text-lg', 'sm:text-xl', 'mb-2', 'sm:mb-3', 'tm-text-yellow');
            contentContainer.appendChild(title);

            const titleName = document.createElement('h3');
            titleName.textContent = item.name;
            titleName.classList.add('text-lg', 'sm:text-xl', 'mb-2', 'sm:mb-3', 'tm-text-yellow');
            contentContainer.appendChild(titleName);

            const price = document.createElement('div');
            price.textContent = item.price;
            price.classList.add('text-white', 'text-md', 'sm:text-lg', 'font-light', 'mb-1');
            contentContainer.appendChild(price);

            menuItemContainer.appendChild(contentContainer);
            mainContainer.appendChild(menuItemContainer);
        });

        flexContainer.appendChild(mainContainer);
        tabContent.appendChild(flexContainer);
        tabContent.style.backgroundColor = 'rgb(100, 100, 100)';
        tabContent.style.marginLeft = '25%';
        tabContent.style.marginRight = '25%';

        // Add tabContent as a child to the second container
        contentContainer.appendChild(tabContent);
    });
}

// Call the combined function to generate tabs and their content
generateTabsAndContent();
