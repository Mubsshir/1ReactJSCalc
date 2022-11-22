import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import beepSound from "../sounds/DigiBeep.mp3";

const DisplayContext = React.createContext({
    displayText: null,
    handleDisplay: (payload) => { },
    DisplayIsOn: false,
});

export const ContextProvider = (props) => {
    const [play] = useSound(beepSound);
    const [isOn, setIsOn] = useState(false);
    const [displayText, setDisplayText] = useState("");
    const [operand, setOprand] = useState(null);
    useEffect(() => {
        if (isOn) {
            setDisplayText("0");
        } else {
            setDisplayText("");
        }
    }, [isOn]);

    //#region  Display handler
    const DisplayHandler = (payload) => {
        try {
            if (isOn) {
                play();
            }
            if (
                payload === "+" ||
                payload === "-" ||
                payload === "/" ||
                payload === "*" ||
                payload === "%"
            ) {
                if (!isNaN(displayText)) {
                    if (operand === null) {
                        setOprand(displayText + payload);
                        setDisplayText("");
                        return;
                    } else {
                        let result = eval(operand + displayText);
                        setDisplayText(result);
                        setOprand(null);
                        return;
                    }
                }
            }
            if (payload === "=") {
                if (!isNaN(displayText)) {
                    if (operand !== null) {
                        let result = eval(operand + displayText);
                        setDisplayText(result);
                        setOprand(null);
                    }
                }
            }
            if (payload === "CE") {
                if (isOn) {
                    setDisplayText("0");
                    setOprand(null);
                    return;
                }
            } else if (payload === "OFF") {
                console.log(isOn);
                setIsOn(!isOn);
            } else if (payload === "MRC" || payload === "M+" || payload === "M-") {
                if (isOn) {
                    setDisplayText("...");
                }
            } else if (payload === "1") {
                if (isOn) {
                    setDisplayText((prev) => {
                        if (prev !== "0" && !isNaN(prev % 1)) {
                            if (prev.length === 18) {
                                return prev;
                            }
                            return prev + payload;
                        }
                        return payload;
                    });
                }
            } else if (payload === "2") {
                if (isOn) {
                    setDisplayText((prev) => {
                        if (prev !== "0" && !isNaN(prev % 1)) {
                            if (prev.length === 18) {
                                return prev;
                            }
                            return prev + payload;
                        }
                        return payload;
                    });
                }
            } else if (payload === "3") {
                if (isOn) {
                    setDisplayText((prev) => {
                        if (prev !== "0" && !isNaN(prev % 1)) {
                            if (prev.length === 18) {
                                return prev;
                            }
                            return prev + payload;
                        }
                        return payload;
                    });
                }
            } else if (payload === "4") {
                if (isOn) {
                    setDisplayText((prev) => {
                        if (prev !== "0" && !isNaN(prev % 1)) {
                            if (prev.length === 18) {
                                return prev;
                            }
                            return prev + payload;
                        }
                        return payload;
                    });
                }
            } else if (payload === "5") {
                if (isOn) {
                    setDisplayText((prev) => {
                        if (prev !== "0" && !isNaN(prev % 1)) {
                            if (prev.length === 18) {
                                return prev;
                            }
                            return prev + payload;
                        }
                        return payload;
                    });
                }
            } else if (payload === "6") {
                if (isOn) {
                    setDisplayText((prev) => {
                        if (prev !== "0" && !isNaN(prev % 1)) {
                            if (prev.length === 18) {
                                return prev;
                            }
                            return prev + payload;
                        }
                        return payload;
                    });
                }
            } else if (payload === "7") {
                if (isOn) {
                    setDisplayText((prev) => {
                        if (prev !== "0" && !isNaN(prev % 1)) {
                            if (prev.length === 18) {
                                return prev;
                            }
                            return prev + payload;
                        }
                        return payload;
                    });
                }
            } else if (payload === "8") {
                if (isOn) {
                    setDisplayText((prev) => {
                        if (prev !== "0" && !isNaN(prev % 1)) {
                            if (prev.length === 18) {
                                return prev;
                            }
                            return prev + payload;
                        }
                        return payload;
                    });
                }
            } else if (payload === "9") {
                if (isOn) {
                    setDisplayText((prev) => {
                        if (prev !== "0" && !isNaN(prev % 1)) {
                            if (prev.length === 18) {
                                return prev;
                            }
                            return prev + payload;
                        }
                        return payload;
                    });
                }
            } else if (payload === "0") {
                if (isOn) {
                    setDisplayText((prev) => {
                        if (prev !== "0" && !isNaN(prev % 1)) {
                            if (prev.length === 18) {
                                return prev;
                            }
                            return prev + payload;
                        }
                        return payload;
                    });
                }
            } else if (payload === ".") {
                if (isOn) {
                    setDisplayText((prev) => {
                        if (prev !== "0" && !isNaN(prev % 1)) {
                            if (prev.includes(".")) {
                                return prev;
                            }
                            return prev + payload;
                        }
                        return 0 + payload;
                    });
                }
            } else if (payload === "Root") {
                if (isOn) {
                    setDisplayText((prev) => {
                        if (prev !== "0" && !isNaN(prev % 1)) {
                            return Math.sqrt(prev).toFixed(5);
                        }
                        return 0;
                    });
                }
            }
        } catch (error) {
            console.log(error.message);
        }
    };
    //#endregion

    const contextValue = {
        displayText: displayText,
        handleDisplay: DisplayHandler,
        DisplayIsOn: isOn,
    };
    return (
        <DisplayContext.Provider value={contextValue}>
            {props.children}
        </DisplayContext.Provider>
    );
};

export default DisplayContext;
