import { useContext, useEffect, useState } from "react"
import { View, StyleSheet, Text, TouchableOpacity, Alert } from "react-native"
import { MyContext } from "./Mycontext";

export const Box = () => {

    const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);
    const [number2, setNumber2] = useState(Math.floor(Math.random() * 100) + 1);
    const operators = ['+', '-', '*', '/']
    const [operator, setOperator] = useState(operators[Math.floor(Math.random() * 4)]);
    const [correctAnswerIndex, setCorrectAnswerIndex] = useState(Math.floor(Math.random() * 4));
    const [answer, setAnswer] = useState(Math.floor(calculateAnswer(number,number2,operator)))
    const [secondsLeft, setSecondsLeft] = useState(60);
   
    const generateRandomNumber = () => {
        const newNumber = Math.floor(Math.random() * 100) + 1;
        const newNumber2 = Math.floor(Math.random() * 100) + 1;
        const newOperator = operators[Math.floor(Math.random() * 4)];
        const newCorrectAnswerIndex = Math.floor(Math.random() * 4);
        setNumber(newNumber);
        setNumber2(newNumber2);
        setOperator(newOperator);
        setCorrectAnswerIndex(newCorrectAnswerIndex);
        setAnswer(Math.floor(calculateAnswer(newNumber, newNumber2, newOperator)));
    };

    

    function calculateAnswer(num1, num2, op) {
        switch (op) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                return num1 / num2;
            default:
                return 0;
        }
    }

    const answerButtons = [answer, answer + 1, answer - 2, answer + 3];
    const shuffledButtons = answerButtons.sort(() => Math.random() - 0.5);

    const context = useContext(MyContext);

    const correctAnswer = (selectedAnswer)=>{
        if(selectedAnswer === answer){
            context.setScore(e=>e+10);
            console.log("doğru");
        }else{
            context.setScore(e=>e-10);
        }
        
        if(context.score === 40){
            console.log("bitti");
        }
        generateRandomNumber();
    }



    return (
        <View style={styles.box} >
            <View style={{
                flex: 1,
                justifyContent: "center"
            }}>
                <Text style={styles.question} >{number} {operator} {number2} = ?</Text>
            </View>
            <View style={{
                flex: 1,
                flexDirection: "row",
            }} >
                <View style={{ flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center" }} >
                    <TouchableOpacity onPress={()=>correctAnswer(shuffledButtons[0])} >
                        <View style={styles.ansButton} >
                            <Text style={styles.question} >{shuffledButtons[0]}</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>correctAnswer(shuffledButtons[1])} >
                        <View style={styles.ansButton} >
                            <Text style={styles.question} >{shuffledButtons[1]}</Text>
                        </View>
                    </TouchableOpacity>

                </View>
                <View style={{ flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center" }} >
                    <TouchableOpacity onPress={()=>correctAnswer(shuffledButtons[2])} >
                        <View style={styles.ansButton} >
                            <Text style={styles.question} >{shuffledButtons[2]}</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>correctAnswer(shuffledButtons[3])} >
                        <View style={styles.ansButton} >
                            <Text style={styles.question} >{shuffledButtons[3]}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    box: {
        width: 350,
        height: 325,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#FF5151"
    },
    question: {
        fontWeight: "bold",
        fontSize: 25
    },
    ansButton: {
        width: 100,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#FFB916",
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center"
    }
})