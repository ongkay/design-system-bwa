import objectsToString from "lib/objectsToString"

type ColorInput = "white" | "blue-gray" | "gray" | "brown" | "deep-orange" | "orange" | "amber" | "yellow" | "lime" | "light-green" | "green" | "teal" | "cyan" | "light-blue" | "blue" | "indigo" | "deep-purple" | "purple" | "pink" | "red"


export const btnVar = {
    gradient: (color?: ColorInput) => {
        const inputColor = color ?? 'blue'
        return objectsToString({
            backgroud: `bg-gradient-to-tr from-${inputColor}-600 to-${inputColor}-400`,
            color: `text-white`,
            shadow: `shadow-md shadow-${inputColor}-500/20`,
            hover: `hover:shadow-lg hover:shadow-${inputColor}-500/40`,
            active: `active:opacity-[0.85]`,
        })
    },
    filled: (color?: ColorInput) => {
        const inputColor = color ?? 'blue'
        return objectsToString({
            backgroud: `bg-${inputColor}-500`,
            color: `text-white`,
            shadow: `shadow-md shadow-${inputColor}-500/20`,
            hover: `hover:shadow-lg hover:shadow-${inputColor}-500/40`,
            focus: `focus:opacity-[0.85] focus:shadow-none`,
            active: `active:opacity-[0.85] active:shadow-none`,
        })
    },
    text: (color?: ColorInput) => {
        const inputColor = color ?? 'blue'
        return objectsToString({
            color: `text-${inputColor}-500`,
            hover: `hover:bg-${inputColor}-500/10`,
            active: `active:bg-${inputColor}-500/30`,
        })
    },
    outlined: (color?: ColorInput) => {
        const inputColor = color ?? 'blue'
        return objectsToString({
            border: `border border-${inputColor}-500`,
            color: `text-${inputColor}-500`,
            hover: `hover:opacity-75`,
            focus: `focus:ring focus:ring-${inputColor}-200`,
            active: `active:opacity-[0.85]`,
        })
    }
}


