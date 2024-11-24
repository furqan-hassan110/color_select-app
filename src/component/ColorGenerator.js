import React,{ useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from "react-native";
import backgroundimg from '../asset/images/background1.png';
import backbutton from '../asset/images/backbutton.png';
import LinearGradient from 'react-native-linear-gradient';
// import Clipboard from '@react-native-clipboard/clipboard';

const ColorGenerator =()=>{

const [copiedText, setCopiedText] = useState('');

const [color1, setColor1] = useState("rgb(0,0,0)");
const [color2, setColor2] = useState("rgb(0,0,0)");
const [color3, setColor3] = useState("rgb(0,0,0)");

const randomColor = () =>{
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    console.log(red,green,blue)
    return `rgb(${red},${green},${blue})`;
}
const generateColors = () => {
    setColor1(randomColor());
    setColor2(randomColor());
    setColor3(randomColor());
};

    return(
            <View style={styles.maincontainer}>
                <View style={styles.header}>
                    <Image source={backbutton} style={{width:18, height:25, marginTop:10,marginLeft:8}}></Image>
                    <Text style={styles.headerText}>
                        Random Color Generator
                    </Text>

                </View>
                <ImageBackground source={backgroundimg} style={styles.backgroundimage}>
                   <View style={styles.colorscontainers}>
                        <View style={styles.imagecontainer}>
                            <Text style={[styles.colortext,{backgroundColor: color1}]}>
                                {color1}

                            </Text>
                        </View>
                        <View style={styles.imagecontainer}>
                            <Text style={[styles.colortext,{backgroundColor: color2}]}>
                                {color2}                                       
                            </Text>
                        </View>
                        <View style={styles.imagecontainer}>
                            <Text style={[styles.colortext,{backgroundColor: color3}]}>
                                {color3}

                            </Text>
                        </View>
                        </View>
                        <TouchableOpacity style={styles.buttonstyles} onPress={()=>generateColors()}>
                            <Text style={styles.textstyle}>generate colors</Text>
                        </TouchableOpacity>
            </ImageBackground>
        </View>
        
    )
};
const styles= StyleSheet.create({
    maincontainer:{
        // marginTop: 0,
        // flex:1,
        // alignSelf:'center'
    },
    header:{

        height:50,
        flexDirection:"row",
        width:'100%',
        backgroundColor:'#0F52BA',
        // justifyContent:'center',
        // marginRight:20,
    },
    headerText:{
        fontSize:20,
        fontWeight:"bold",
        marginLeft:12,
        color:"white",
        marginTop:8

    },
    contentcontenor:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    colorscontainers:{
        marginTop:30,
    },
    colortext:{
        // backgroundColor: color3,
        width:"90%",
        height:200,
        borderRadius:15,
        alignSelf:'center',
        textAlign:'center',
        // textAlignVertical:'center',
        paddingTop:10,
        fontSize:20,
        fontWeight:"700",
        color:"white",
        elevation:10
    },
    buttonstyles:{
        backgroundColor:"#0F52BA",
        position: 'relative',
        overflow: 'hidden',
        color:'#eee',
        paddingVertical:10,
        paddingHorizontal:15,
        margin:0,
        display:'flex',
        width:"55%",
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        alignSelf:"center",
        marginTop:30,
        elevation:10
    },
    textstyle:{
        color:"white",
        fontSize:20,
        fontWeight:'700',
        textTransform:'uppercase'
    },
    imagecontainer:{
        marginVertical:5,
        paddingHorizontal:10,
        display:"flex",
        // marginBottom:20,
    },
    backgroundimage:{
        height: 1000,
        // opacity: 0.1\
    
    }

})
export default ColorGenerator;