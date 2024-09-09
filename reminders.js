document.addEventListener('DOMContentLoaded', function() {
    const weeklyMenus = {
        week1: {
            'monday': { breakfast: 'Tea, coffee, Milo, Corn porridge, Egg salad, Apples', lunch: 'Waakye with condiments, Spaghetti Bolognaise, Fresh orange and pineapple juice', dinner: 'Potato Chips, Grilled Chicken, Bruschetta/bread rolls' },
            'tuesday': { breakfast: 'Tea, coffee, Milo, Tom brown, Oven grilled sausages, Fresh orange and pineapple juice', lunch: 'Boiled yam/plantain, Cabbage Stew, Vegetable chicken curry, Sliced watermelon', dinner: 'Minced meat pizza, Stir fry Spaghetti' },
            'wednesday': { breakfast: 'Milo, Tea, Coffee, Fried eggs, Sliced watermelon', lunch: 'Jollof rice, Charcoal grilled chicken, Baked Potato wedges', dinner: 'Fried yam, Grilled chicken, Pilau rice' },
            'thursday': { breakfast: 'Tea, coffee, Milo, Yoghurt, Lebanese flat bread, Apple', lunch: 'Fried plantain, Beans stew, Macanese one pan chicken curry', dinner: 'Beef vegetable sauce, Ga Kenkey' },
            'friday': { breakfast: 'Tea, coffee, Milo, Oats, Meatloaf slices, Tangerine', lunch: 'Omotuo, Chicken Groundnut soup, Chicken sauce', dinner: 'Vegetable Beef stew, Kelewele, Plain rice, Gari foto' },
            'saturday': { breakfast: 'Tea, coffee, milo, Waffles, Gari soakings, Pineapple and watermelon', lunch: 'Banku, Charcoal grilled tilapia, Plain rice', dinner: 'Spaghetti with bolognaise' },
            'sunday': { breakfast: 'Fried eggs/Baked Beans, Tea/coffee and rice water, Cut oranges', lunch: 'Jollof rice, Grilled chicken, Baked Irish potato wedges, Ice Cream', dinner: 'Fried sweet potatoes, Chicken stew, Coleslaw, Boiled rice' }
        },
        week2: {
            'monday': { breakfast: 'Tea, coffee, Milo, Tom brown, Egg and tuna salad, Apples', lunch: 'Kenkey, Spaghetti with egg stew', dinner: 'Baked Potato wedges, Grilled Chicken, Bruschetta' },
            'tuesday': { breakfast: 'Tea, coffee, Milo, Tom brown, Oven grilled sausages, Fresh orange and pineapple juice', lunch: 'Boiled yam/plantain, Chicken Stew, Boiled rice, Kontomire Stew, Grapes', dinner: 'Chapati, Stir fry Spaghetti, Meatball Sauce' },
            'wednesday': { breakfast: 'Milo, Tea, Coffee, Fried eggs, Sliced watermelon', lunch: 'Jollof rice, Charcoal grilled chicken, Baked Potato wedges', dinner: 'Fried yam, Grilled chicken, Pilau rice' },
            'thursday': { breakfast: 'Tea, coffee, Milo, Greek Yoghurt, Granola, Apple', lunch: 'Fried plantain, Beans stew, Clementine/Tangerine', dinner: 'Chicken vegetable sauce, Sweet potatoes' },
            'friday': { breakfast: 'Tea, coffee, Milo, Oats, Meatloaf slices, Tangerine', lunch: 'Omotuo, Horseball palm soup, Vegetable beef stew', dinner: 'Vegetable Beef stew, Kelewele, Gari foto' },
            'saturday': { breakfast: 'Tea, coffee, milo, Hausa koko, Puff loaf/Bread, Gari soakings, Cut oranges', lunch: 'Banku, Beef in okro stew, Tomato beef stew, Fresh coconut/sugarcane juice', dinner: 'Spaghetti with bolognaise' },
            'sunday': { breakfast: 'Fried eggs/Baked Beans, Tea/coffee and rice water, Cut oranges', lunch: 'Cape breyani, Fufu with goat light soup', dinner: 'Fried sweet potatoes, Chicken stew' }
        },
        week3: {
            'monday': { breakfast: 'Tea, coffee, Milo, Tom Brown, Egg salad, Apples', lunch: 'Waakye with condiments, Spaghetti Bolognaise, Fresh oranges', dinner: 'Potato Chips, Grilled Chicken, Bread rolls' },
            'tuesday': { breakfast: 'Tea, coffee, Milo, Oats, Oven grilled sausages, Fresh orange and pineapple juice', lunch: 'Boiled yam/plantain, Cabbage Stew, Sliced watermelon', dinner: 'Chicken pizza, Stir fry Spaghetti' },
            'wednesday': { breakfast: 'Milo, Tea, Coffee, Fried eggs, Sliced watermelon', lunch: 'Jollof rice, Charcoal grilled chicken, Baked Potato wedges', dinner: 'Fried yam, Grilled chicken, Pilau rice' },
            'thursday': { breakfast: 'Tea, coffee, Milo, Yoghurt, Lebanese flat bread, Apple', lunch: 'Fried plantain, Beans stew, Macanese one pan chicken curry', dinner: 'Beef vegetable sauce, Ga Kenkey' },
            'friday': { breakfast: 'Tea, coffee, Milo, Oats, Meatloaf slices, Tangerine', lunch: 'Omotuo, Chicken Groundnut soup, Chicken sauce', dinner: 'Vegetable Beef stew, Kelewele, Plain rice, Gari foto' },
            'saturday': { breakfast: 'Tea, coffee, milo, Waffles, Gari soakings, Grapes', lunch: 'Omotuo, Chicken Groundnut Soup, Fresh coconut and sugarcane juice', dinner: 'Spaghetti with bolognaise' },
            'sunday': { breakfast: 'Fried eggs/Baked Beans, Tea/coffee and rice water, Cut oranges', lunch: 'Jollof rice, Grilled chicken, Baked Irish potato wedges', dinner: 'Fried sweet potatoes, Chicken stew' }
        },
        week4: {
            'monday': { breakfast: 'Tea, coffee, Milo, Tom brown, Egg salad, Apples', lunch: 'Couscous, Lasagna, Fruit platter', dinner: 'Potato Chips, Grilled Chicken, Bruschetta' },
            'tuesday': { breakfast: 'Tea, coffee, Milo, Oats, Oven grilled sausages, Cut oranges (wedges)', lunch: 'Mpotompoto, Vegetable goat stew, Saffron rice, Grilled chicken', dinner: 'Chapati, Stir fry Spaghetti, Vegetable beef stew' },
            'wednesday': { breakfast: 'Milo, Tea, Coffee, Fried eggs, Sliced watermelon', lunch: 'Jollof rice, Lyonnais potatoes, Banana', dinner: 'Fried yam, Grilled chicken, Pilau rice' },
            'thursday': { breakfast: 'Tea, coffee, Milo, Greek yoghurt, Granola, Apple', lunch: 'Banku, Charcoal grilled tilapia, Cut fresh vegetables, Tangerine', dinner: 'Boiled rice, Chicken vegetable sauce, Chapati' },
            'friday': { breakfast: 'Tea, coffee, Milo, Oats, Meatloaf slices, Clementine', lunch: 'Fufu, Goat light soup, Plain rice, Titis stew, Fresh fruit drink', dinner: 'Kelewele, Peppered gizzard, Gari foto' },
            'saturday': { breakfast: 'Tea, coffee, milo, Waffles, Gari soakings, Grapes', lunch: 'Omotuo, Chicken Groundnut Soup, Fresh coconut and sugarcane juice', dinner: 'Spaghetti with bolognaise' },
            'sunday': { breakfast: 'Fried eggs/Baked Beans, Tea/coffee and rice water, Cut oranges', lunch: 'Jollof rice, Grilled chicken, Baked Irish potato wedges', dinner: 'Fried sweet potatoes, Chicken stew' }
        }
    };

    const weekSelect = document.getElementById('weekSelect');
    const daySelect = document.getElementById('daySelect');
    const mealSelect = document.getElementById('mealSelect');
    const submitReminderButton = document.getElementById('submitReminderButton');
    const reminderList = document.getElementById('reminderList');

    
    Object.keys(weeklyMenus).forEach(week => {
        const option = document.createElement('option');
        option.value = week;
        option.textContent = week.charAt(0).toUpperCase() + week.slice(1);
        weekSelect.appendChild(option);
    });

    
    weekSelect.addEventListener('change', function() {
        daySelect.innerHTML = ''; 
        const selectedWeek = weekSelect.value;
        Object.keys(weeklyMenus[selectedWeek]).forEach(day => {
            const option = document.createElement('option');
            option.value = day;
            option.textContent = day.charAt(0).toUpperCase() + day.slice(1);
            daySelect.appendChild(option);
        });
        mealSelect.innerHTML = ''; 
    });

    
    daySelect.addEventListener('change', function() {
        mealSelect.innerHTML = ''; 
        const selectedWeek = weekSelect.value;
        const selectedDay = daySelect.value;
        const meals = weeklyMenus[selectedWeek][selectedDay];

        Object.keys(meals).forEach(meal => {
            const option = document.createElement('option');
            option.value = meals[meal]; 
            option.textContent = meals[meal]; 
            mealSelect.appendChild(option);
        });
    });

    
    submitReminderButton.addEventListener('click', function() {
        const selectedWeek = weekSelect.value;
        const selectedDay = daySelect.value;
        const selectedMeal = mealSelect.value;

        if (selectedWeek && selectedDay && selectedMeal) {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span>Week: ${selectedWeek.charAt(0).toUpperCase() + selectedWeek.slice(1)}, Day: ${selectedDay.charAt(0).toUpperCase() + selectedDay.slice(1)}, Meal: ${selectedMeal}</span>
                <button class="delete-btn">×</button>
            `;
            reminderList.appendChild(listItem);
 
            weekSelect.value = '';
            daySelect.innerHTML = '';
            mealSelect.innerHTML = '';

            
            listItem.querySelector('.delete-btn').addEventListener('click', function() {
                reminderList.removeChild(listItem);
            });
        } else {
            alert('Please select a week, day, and meal.');
        }
    });
});
