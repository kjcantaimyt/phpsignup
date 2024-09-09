document.addEventListener('DOMContentLoaded', function() {
    const weeklyMenus = {
        week1: [
            { day: 'Monday', breakfast: 'Tea, coffee, Milo, Corn porridge, Egg salad, Apples', lunch: 'Waakye with condiments, Spaghetti Bolognaise, Fresh orange and pineapple juice', dinner: 'Potato Chips, Grilled Chicken, Bruschetta/bread rolls' },
            { day: 'Tuesday', breakfast: 'Tea, coffee, Milo, Tom brown, Oven grilled sausages, Fresh orange and pineapple juice', lunch: 'Boiled yam/plantain, Cabbage Stew, Vegetable chicken curry, Sliced watermelon', dinner: 'Minced meat pizza, Stir fry Spaghetti' },
            { day: 'Wednesday', breakfast: 'Milo, Tea, Coffee, Fried eggs, Sliced watermelon', lunch: 'Jollof rice, Charcoal grilled chicken, Baked Potato wedges', dinner: 'Fried yam, Grilled chicken, Pilau rice' },
            { day: 'Thursday', breakfast: 'Tea, coffee, Milo, Yoghurt, Lebanese flat bread, Apple', lunch: 'Fried plantain, Beans stew, Macanese one pan chicken curry', dinner: 'Beef vegetable sauce, Ga Kenkey' },
            { day: 'Friday', breakfast: 'Tea, coffee, Milo, Oats, Meatloaf slices, Tangerine', lunch: 'Omotuo, Chicken Groundnut soup, Chicken sauce', dinner: 'Vegetable Beef stew, Kelewele, Plain rice, Gari foto' },
            { day: 'Saturday', breakfast: 'Tea, coffee, milo, Waffles, Gari soakings, Pineapple and watermelon', lunch: 'Banku, Charcoal grilled tilapia, Plain rice', dinner: 'Spaghetti with bolognaise' },
            { day: 'Sunday', breakfast: 'Fried eggs/Baked Beans, Tea/coffee and rice water, Cut oranges', lunch: 'Jollof rice, Grilled chicken, Baked Irish potato wedges, Ice Cream', dinner: 'Fried sweet potatoes, Chicken stew, Coleslaw, Boiled rice' },
        ],
        week2: [
            { day: 'Monday', breakfast: 'Tea, coffee, Milo, Tom brown, Egg and tuna salad, Apples', lunch: 'Kenkey, Spaghetti with egg stew', dinner: 'Baked Potato wedges, Grilled Chicken, Bruschetta' },
            { day: 'Tuesday', breakfast: 'Tea, coffee, Milo, Tom brown, Oven grilled sausages, Fresh orange and pineapple juice', lunch: 'Boiled yam/plantain, Chicken Stew, Boiled rice, Kontomire Stew, Grapes', dinner: 'Chapati, Stir fry Spaghetti, Meatball Sauce' },
            { day: 'Wednesday', breakfast: 'Milo, Tea, Coffee, Fried eggs, Sliced watermelon', lunch: 'Jollof rice, Charcoal grilled chicken, Baked Potato wedges', dinner: 'Fried yam, Grilled chicken, Pilau rice' },
            { day: 'Thursday', breakfast: 'Tea, coffee, Milo, Greek Yoghurt, Granola, Apple', lunch: 'Fried plantain, Beans stew, Clementine/Tangerine', dinner: 'Chicken vegetable sauce, Sweet potatoes' },
            { day: 'Friday', breakfast: 'Tea, coffee, Milo, Oats, Meatloaf slices, Tangerine', lunch: 'Omotuo, Horseball palm soup, Vegetable beef stew', dinner: 'Vegetable Beef stew, Kelewele, Gari foto' },
            { day: 'Saturday', breakfast: 'Tea, coffee, milo, Hausa koko, Puff loaf/Bread, Gari soakings, Cut oranges', lunch: 'Banku, Beef in okro stew, Tomato beef stew, Fresh coconut/sugarcane juice', dinner: 'Spaghetti with bolognaise' },
            { day: 'Sunday', breakfast: 'Fried eggs/Baked Beans, Tea/coffee and rice water, Cut oranges', lunch: 'Cape breyani, Fufu with goat light soup', dinner: 'Fried sweet potatoes, Chicken stew' },
        ],
        week3: [
            { day: 'Monday', breakfast: 'Tea, coffee, Milo, Tom Brown, Egg salad, Apples', lunch: 'Waakye with condiments, Spaghetti Bolognaise, Fresh oranges', dinner: 'Potato Chips, Grilled Chicken, Bread rolls' },
            { day: 'Tuesday', breakfast: 'Tea, coffee, Milo, Oats, Oven grilled sausages, Fresh orange and pineapple juice', lunch: 'Boiled yam/plantain, Cabbage Stew, Sliced watermelon', dinner: 'Chicken pizza, Stir fry Spaghetti' },
            { day: 'Wednesday', breakfast: 'Milo, Tea, Coffee, Fried eggs, Sliced watermelon', lunch: 'Jollof rice, Charcoal grilled chicken, Baked Potato wedges', dinner: 'Fried yam, Grilled chicken, Pilau rice' },
            { day: 'Thursday', breakfast: 'Tea, coffee, Milo, Yoghurt, Lebanese flat bread, Apple', lunch: 'Fried plantain, Beans stew, Macanese one pan chicken curry', dinner: 'Beef vegetable sauce, Ga Kenkey' },
            { day: 'Friday', breakfast: 'Tea, coffee, Milo, Oats, Meatloaf slices, Tangerine', lunch: 'Omotuo, Chicken Groundnut soup, Chicken sauce', dinner: 'Vegetable Beef stew, Kelewele, Plain rice, Gari foto' },
            { day: 'Saturday', breakfast: 'Tea, coffee, milo, Waffles, Gari soakings, Grapes', lunch: 'Omotuo, Chicken Groundnut Soup, Fresh coconut and sugarcane juice', dinner: 'Spaghetti with bolognaise' },
            { day: 'Sunday', breakfast: 'Fried eggs/Baked Beans, Tea/coffee and rice water, Cut oranges', lunch: 'Jollof rice, Grilled chicken, Baked Irish potato wedges', dinner: 'Fried sweet potatoes, Chicken stew' },
        ],
        week4: [
            { day: 'Monday', breakfast: 'Tea, coffee, Milo, Tom brown, Egg salad, Apples', lunch: 'Couscous, Lasagna, Fruit platter', dinner: 'Potato Chips, Grilled Chicken, Bruschetta' },
            { day: 'Tuesday', breakfast: 'Tea, coffee, Milo, Oats, Oven grilled sausages, Cut oranges (wedges)', lunch: 'Mpotompoto, Vegetable goat stew, Saffron rice, Grilled chicken', dinner: 'Chapati, Stir fry Spaghetti, Vegetable beef stew' },
            { day: 'Wednesday', breakfast: 'Milo, Tea, Coffee, Fried eggs, Sliced watermelon', lunch: 'Jollof rice, Lyonnais potatoes, Banana', dinner: 'Fried yam, Grilled chicken, Pilau rice' },
            { day: 'Thursday', breakfast: 'Tea, coffee, Milo, Greek yoghurt, Granola, Apple', lunch: 'Banku, Charcoal grilled tilapia, Cut fresh vegetables, Tangerine', dinner: 'Boiled rice, Chicken vegetable sauce, Chapati' },
            { day: 'Friday', breakfast: 'Tea, coffee, Milo, Oats, Meatloaf slices, Clementine', lunch: 'Fufu, Goat light soup, Plain rice, Titis stew, Fresh fruit drink', dinner: 'Kelewele, Peppered gizzard, Gari foto' },
            { day: 'Saturday', breakfast: 'Tea, coffee, milo, Waffles, Gari soakings, Grapes', lunch: 'Omotuo, Chicken Groundnut Soup, Fresh coconut and sugarcane juice', dinner: 'Spaghetti with bolognaise' },
            { day: 'Sunday', breakfast: 'Fried eggs/Baked Beans, Tea/coffee and rice water, Cut oranges', lunch: 'Jollof rice, Grilled chicken, Baked Irish potato wedges', dinner: 'Fried sweet potatoes, Chicken stew' },
        ]
    };

   
    let currentMealIndex = 0;
    let currentWeekNumber = 0;
    let currentDayMenu = null;
    const mealTypes = ['breakfast', 'lunch', 'dinner'];

    function updateDateTime() {
        const now = new Date();
        const dateString = now.toLocaleDateString();
        const timeString = now.toLocaleTimeString();
        const dayString = now.toLocaleString('default', { weekday: 'long' });
        document.getElementById('datetime').textContent = `Today's date: ${dateString} | Day: ${dayString} | Time: ${timeString}`;
    }

    function getWeekNumber(d) {
        d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
        d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
        const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
        return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
    }

    function getMealType(hour, minute) {
        if (hour >= 6 && hour < 12) {
            return 'breakfast';
        } else if (hour >= 12 && hour < 17 || (hour === 17 && minute < 30)) {
            return 'lunch';
        } else {
            return 'dinner';
        }
    }

    function updateMenuDisplay() {
        const mealType = mealTypes[currentMealIndex];
        const meal = currentDayMenu[mealType];

        if (meal) {
            document.getElementById('mealType').textContent = `Current meal: ${mealType.charAt(0).toUpperCase() + mealType.slice(1)}`;
            document.getElementById('foodItem').textContent = meal;
        }

        updateSideMealDisplay('previousMeal', (currentMealIndex + 2) % 3);
        updateSideMealDisplay('nextMeal', (currentMealIndex + 1) % 3);
    }

    function updateSideMealDisplay(elementId, mealIndex) {
        const sideMealType = mealTypes[mealIndex];
        const sideMeal = currentDayMenu[sideMealType];

        const element = document.getElementById(elementId);
        if (element) {
            const mealTypeElement = element.querySelector('.meal-type');
            const mealContentElement = element.querySelector('.meal-content');

            if (mealTypeElement && mealContentElement && sideMeal) {
                mealTypeElement.textContent = `${sideMealType.charAt(0).toUpperCase() + sideMealType.slice(1)}:`;
                mealContentElement.textContent = sideMeal;
            }
        }
    }

    function populateMenu() {
        const now = new Date();
        currentWeekNumber = getWeekNumber(now) % 4 || 4;
        const dayOfWeek = now.toLocaleString('default', { weekday: 'long' });
        const weekKey = `week${currentWeekNumber}`;
        const weeklyMenu = weeklyMenus[weekKey];

        currentDayMenu = weeklyMenu.find(menu => menu.day === dayOfWeek);

        if (currentDayMenu) {
            const hour = now.getHours();
            const minute = now.getMinutes();
            currentMealIndex = mealTypes.indexOf(getMealType(hour, minute));
            updateMenuDisplay();
        } else {
            console.warn(`No menu found for ${dayOfWeek} in week ${currentWeekNumber}.`);
        }
    }

    updateDateTime();
    setInterval(updateDateTime, 1000);
    populateMenu();
    setInterval(populateMenu, 60000);
});