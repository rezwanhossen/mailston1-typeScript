"use strict";
{
    //tarnary operator | optional operator | nullish coalafing
    const age = 10;
    const isAdult = age >= 18 ? "adalt" : "not adult";
    console.log({ isAdult });
    //   nullish coalafing
    //null /undefind ar upor base kora kono desition nita hola
    const isAuth = null;
    const result = isAuth !== null && isAuth !== void 0 ? isAuth : "gest";
    console.log(result);
}
