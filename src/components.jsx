import { colour_mix, largest_product} from './functions.js';

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
        <p>largest_product("2","5","3") == "{largest_product("2","5","3")}"</p>
        <p>largest_product("-8","12","20") == "{largest_product("-8","12","20")}"</p>
        <p>largest_product("15", "0","60") == "{largest_product("15", "0","60")}"</p>
        <p>largest_product("10","6","1") == "{largest_product("10","6","1")}"</p>
       
    </section>;
}



export { Question1, Question2 }