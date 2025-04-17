import { colour_mix, largest_product, day_of_the_week, pay_raise, is_leap } from './functions.js';

function Question1() {
    return <section>
        <h2>Question 1. Colour Mix: Determines the secondary rgb_colour from mixing two primary
            RGB (Red, Green, Blue) colours. The order of the colours
            is *not* significant. </h2>
        <h3>test results</h3>
        <p>colour_mix("green","red") == "{colour_mix("green", "red")}"</p>
        <p>colour_mix("blue","red") == "{colour_mix("blue", "red")}"</p>
        <p>colour_mix("yellow", "yellow") == "{colour_mix("yellow", "yellow")}"</p>
        <p>colour_mix("green", "blue") == "{colour_mix("green", "blue")}"</p>
    </section>;
}

function Question2() {
    return <section>
        <h2>Question 2. Largest Product: Returns the product of the two largest values of
            val1, val2, and val3. </h2>
        <h3>test results</h3>
        <p>largest_product("2","5","3") == "{largest_product("2", "5", "3")}"</p>
        <p>largest_product("-8","12","20") == "{largest_product("-8", "12", "20")}"</p>
        <p>largest_product("15", "0","60") == "{largest_product("15", "0", "60")}"</p>
        <p>largest_product("10","6","1") == "{largest_product("10", "6", "1")}"</p>

    </section>;
}

function Question3() {
    return <section>
        <h2>Question 3. Day of the Week: Returns the name of a day of the week given an integer day number. </h2>
        <h3>test results</h3>
        <p>day_of_the_week(1) == "{day_of_the_week(1)}"</p>
        <p>day_of_the_week(5) == "{day_of_the_week(5)}"</p>
        <p>day_of_the_week(2) == "{day_of_the_week(2)}"</p>
        <p>day_of_the_week(6) == "{day_of_the_week(6)}"</p>

    </section>;
}

function Question4() {
    return <section>
        <h2>Question 4. Pay Raise: Calculates pay raises for employees. Pay raises are based on:
            status: Full Time ('F)' or Part Time ('P')
            and years of service </h2>
        <h3>test results</h3>
        <p>pay_raise("F",2,25000) == "{pay_raise("F", 2, 25000).toFixed(2)}"</p>
        <p>pay_raise("P",4,100000) == "{pay_raise("P", 4, 100000).toFixed(2)}"</p>
        <p>pay_raise("F", 15, 150000) == "{pay_raise("F", 15, 150000).toFixed(2)}"</p>
        <p>pay_raise("P",1,50000) == "{pay_raise("P", 1, 50000).toFixed(2)}"</p>


    </section>;
}

function Question5() {
    return <section>
        <h2>Question 5. Leap Year: Determines if a year is a leap year. Every year that is
            exactly divisible by four is a leap year, except for years
            that are exactly divisible by 100, but these centurial years
            are leap years if they are exactly divisible by 400. </h2>
        <h3>test results</h3>
        <p>is_leap(1999) == "{is_leap(1999)}"</p>
        <p>is_leap(2004) == "{is_leap(2004)}"</p>
        <p>is_leap(2100) == "{is_leap(2100)}"</p>
        <p>is_leap(2002) == "{is_leap(2002)}"</p>

    </section>;
}
export { Question1, Question2, Question3, Question4, Question5 }