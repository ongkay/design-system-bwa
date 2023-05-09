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

export const stylebase = {
    container: {
        position: "relative",
        width: "w-full",
        minWidth: "min-w-[200px]",
    },
    input: {
        peer: "peer",
        width: "w-full",
        height: "h-full",
        bg: "bg-transparent",
        color: "text-gray-500",
        fontFamily: "font-sans",
        fontWeight: "font-normal",
        outline: "outline outline-0 focus:outline-0",
        disabled: "disabled:bg-gray-50 disabled:border-0",
        transition: "transition-all",
        // ini tambahan
        borderWidth: "placeholder-shown:border",
        borderColor:
            "placeholder-shown:border-gray-400 placeholder-shown:border-t-gray-400",
        floated: {
            borderWidth: "border focus:border-2",
            borderColor: "border-t-transparent focus:border-t-transparent",
        },
    },
    label: {
        display: "flex",
        width: "w-full",
        height: "h-full",
        userSelect: "select-none",
        pointerEvents: "pointer-events-none",
        position: "absolute -top-1.5",
        left: "left-0",
        fontWeight: "font-normal",
        color: "peer-placeholder-shown:text-gray-600",
        lineHeight: "leading-tight peer-focus:leading-tight",
        disabled:
            "peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-600",
        transition: "transition-all",
        // tambahan 
        // position: "-top-1.5",
        fontSize: "peer-placeholder-shown:text-sm",
        floated: {
            fontSize: "text-[11px] peer-focus:text-[11px]",
        },
        before: {
            content: "before:content[' ']",
            display: "before:block",
            boxSizing: "before:box-border",
            width: "before:w-2.5",
            height: "before:h-1.5",
            mt: "before:mt-[6.5px]",
            mr: "before:mr-1",
            borderColor: "peer-placeholder-shown:before:border-transparent",
            borderRadius: "before:rounded-tl-md",
            floated: {
                bt: "before:border-t peer-focus:before:border-t-2",
                bl: "before:border-l peer-focus:before:border-l-2",
            },
            pointerEvents: "before:pointer-events-none",
            transition: "before:transition-all",
            disabled: "peer-disabled:before:border-transparent",
        },
        after: {
            content: "after:content[' ']",
            display: "after:block",
            flexGrow: "after:flex-grow",
            boxSizing: "after:box-border",
            width: "after:w-2.5",
            height: "after:h-1.5",
            mt: "after:mt-[6.5px]",
            ml: "after:ml-1",
            borderColor: "peer-placeholder-shown:after:border-transparent",
            borderRadius: "after:rounded-tr-md",
            floated: {
                bt: "after:border-t peer-focus:after:border-t-2",
                br: "after:border-r peer-focus:after:border-r-2",
            },
            pointerEvents: "after:pointer-events-none",
            transition: "after:transition-all",
            disabled: "peer-disabled:after:border-transparent",
        },
    },
    icon: {
        display: "grid",
        placeItems: "place-items-center",
        position: "absolute",
        color: "text-gray-600",
        // tambahan
        top: "top-2/4",
        right: "right-3",
        transform: "-translate-y-2/4",
    },
    asterisk: {
        display: "inline-block",
        color: "text-red-600",
        ml: "ml-0.5",
    },
}

export const stylebaseOutlined = {
    base: {
        input: {
            borderWidth: "placeholder-shown:border",
            borderColor:
                "placeholder-shown:border-gray-400 placeholder-shown:border-t-gray-400",
            floated: {
                borderWidth: "border focus:border-2",
                borderColor: "border-t-transparent focus:border-t-transparent",
            },
        },
        inputWithIcon: {
            pr: "!pr-9",
        },
        icon: {
            top: "top-2/4",
            right: "right-3",
            transform: "-translate-y-2/4",
        },
    },
    sizes: {
        md: {
            container: {
                height: "h-10",
            },
            input: {
                fontSize: "text-sm",
                px: "px-3",
                py: "py-2.5",
                borderRadius: "rounded-[7px]",
            },
            label: {
                lineHeight: "peer-placeholder-shown:leading-[3.75]",
            },
            icon: {
                width: "w-5",
                height: "h-5",
            },
        },
        lg: {
            container: {
                height: "h-11",
            },
            input: {
                fontSize: "text-sm",
                px: "px-3",
                py: "py-3",
                borderRadius: "rounded-md",
            },
            label: {
                lineHeight: "peer-placeholder-shown:leading-[4.1]",
            },
            icon: {
                width: "w-6",
                height: "h-6",
            },
        },
    },

    error: {
        input: {
            borderColor:
                "border-red-500 placeholder-shown:border-t-red-500 placeholder-shown:border-red-500",
            borderColorFocused: "focus:border-red-500",
        },
        label: {
            color: "text-red-500 peer-focus:text-red-500 peer-placeholder-shown:text-red-500",
            before: "before:border-red-500 peer-focus:before:border-red-500",
            after: "after:border-red-500 peer-focus:after:border-red-500",
        },
    },
    success: {
        input: {
            borderColor:
                "border-green-500 placeholder-shown:border-t-green-500 placeholder-shown:border-green-500",
            borderColorFocused: "focus:border-green-500",
        },
        label: {
            color: "text-green-500 peer-focus:text-green-500 peer-placeholder-shown:text-green-500",
            before: "before:border-green-500 peer-focus:before:border-green-500",
            after: "after:border-green-500 peer-focus:after:border-green-500",
        },
    },
    shrink: {
        input: {
            borderTop: "!border-t-transparent",
        },
        label: {
            fontSize: "!text-[11px]",
            lineHeight: "!leading-tight",
            borderColor: "before:!border-gray-400 after:!border-gray-400",
        },
    },
};


