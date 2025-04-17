function colour_mix(rgb_colour1, rgb_colour2) {
    /*
        -------------------------------------------------------
        Determines the secondary rgb_colour from mixing two primary
        RGB (Red, Green, Blue) colours. The order of the colours
        is *not* significant.
        Returns "Error" if any of the rgb_colour parameter(s) are invalid.
            "red" + "blue": "fuchsia"
            "red" + "green": "yellow"
            "green" + "blue": "aqua"
            "red" + "red": "red"
            "blue" + "blue": "blue"
            "green" + "green": "green"
        Use: rgb_colour = colour_mix(rgb_colour1, rgb_colour2)
        -------------------------------------------------------
        Parameters:
            rgb_colour1 - a primary RGB rgb_colour (str)
            rgb_colour2 - a primary RGB rgb_colour (str)
        Returns:
            rgb_colour - a secondary RGB rgb_colour (str)
        -------------------------------------------------------
    */

    if (rgb_colour1 === "red") {
        if (rgb_colour2 === "red") {
            return "red";
        }
        else if (rgb_colour2 === "green") {
            return "yellow";
        }
        else if (rgb_colour2 === "blue") {
            return "fuchsia";
        }
        else {
            return "Error";
        }
    } else if (rgb_colour1 === "green") {
        if (rgb_colour2 === "red") {
            return "yellow";
        }
        else if (rgb_colour2 === "green") {
            return "green";
        }
        else if (rgb_colour2 === "blue") {
            return "aqua";
        }
        else {
            return "Error";
        }
    } else if (rgb_colour1 === "blue") {
        if (rgb_colour2 === "red") {
            return "fuchsia";
        }
        else if (rgb_colour2 === "green") {
            return "aqua";
        }
        else if (rgb_colour2 === "blue") {
            return "blue";
        }
        else {
            return "Error";
        }
    } else {
        return "Error";
    }

}

function largest_product(val1, val2, val3) {
    /*
        -------------------------------------------------------
        Returns the product of the two largest values of
        val1, val2, and val3.
        Use: product = largest_product(val1, val2, val3)
        -------------------------------------------------------
        Parameters:
            val1 - a number (float)
            val2 - a number (float)
            val3 - a number (float)
        Returns:
            product - the product of the two largest values of
                val1, val2, and val3 (float)
        ------------------------------------------------------
     */
    if (val1 <= val2 && val1 <= val3) {
        return val2 * val3;
    } else if (val2 <= val1 && val2 <= val3) {
        return val1 * val3;
    } else if (val3 <= val1 && val3 <= val2) {
        return val1 * val2
    }
}

function day_of_the_week(day_num) {
    /*
    -------------------------------------------------------
    Returns the name of a day of the week given an integer day number.
    Day 1 is "Sunday", day 7 is "Saturday".
    Returns "Error" if the number is not valid.
    Use: day = day_of_the_week(day_num)
    -------------------------------------------------------
    Parameters:
        day_num - day number (1 <= int <= 7)
    Returns:
        day - name of a day of the week (str)
    ------------------------------------------------------
    */
    if (day_num === 1) {
        return "Sunday";
    } else if (day_num === 2) {
        return "Monday";
    } else if (day_num === 3) {
        return "Tuesday";
    } else if (day_num === 4) {
        return "Wednesday";
    } else if (day_num === 5) {
        return "Thursday";
    } else if (day_num === 6) {
        return "Friday";
    } else if (day_num === 7) {
        return "Saturday";
    } else {
        return "Error"
    }

}

function pay_raise(status, years, salary) {
    /*
    -------------------------------------------------------
    Calculates pay raises for employees. Pay raises are based on:
    status: Full Time ('F)' or Part Time ('P')
    and years of service
    Raises are:
        5% for full time greater than or equal to 10 years service
        1.5% for full time less than 4 years service
        3% for part time greater than 10 years service
        1% for part time less than 4 years service
        2% for all others
    Use: new_salary = pay_raise(status, years, salary)
    -------------------------------------------------------
    Parameters:
        status - employment type (str - 'F' or 'P')
        years - number of years employed (int > 0)
        salary - current salary (float > 0)
    Returns:
        new_salary - employee's new salary (float).
    -------------------------------------------------------
    */
    if (status === "F" && years >= 10) {
        return salary * 1.05;
    } else if (status === "F" && years < 4) {
        return salary * 1.015;
    } else if (status === "P" && years > 10) {
        return salary * 1.03;
    } else if (status === "P" && years < 4) {
        return salary * 1.01;
    } else {
        return salary * 1.02;
    }
}

function is_leap(year) {
    /*
    -------------------------------------------------------
    Determines if a year is a leap year. Every year that is
    exactly divisible by four is a leap year, except for years
    that are exactly divisible by 100, but these centurial years
    are leap years if they are exactly divisible by 400. For
    example, the years 1700, 1800, and 1900 are not leap years,
    but the years 1600 and 2000 are.
    Use: result = is_leap(year)
    -------------------------------------------------------
    Parameters:
        year - a year (int > 0)
    Returns:
        result - True if year is a leap year,
            False otherwise (boolean)
    ------------------------------------------------------
    */
    if (year % 400 === 0) {
        return "true";
    } else if (year % 4 === 0 && year % 100 !== 0) {
        return "true";
    } else {
        return "false";
    }

}


export { colour_mix, largest_product, day_of_the_week, pay_raise, is_leap }