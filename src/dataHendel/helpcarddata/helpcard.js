import Img from '../../allImage/img'
import {v4 as uuidv4} from 'uuid';
const helpcard=[
    {
        id:uuidv4(),
        img:Img[4],
        name:'Helped Kid ',
        lastname:'Humanitarian help',
        hdes:'Paraisópolis is hungry and needs your help.',
        sendHelp:{
            imgn:Img[4],
            imgn1:Img[5],
            imgn2: Img[6],
            nameh:'Sadia Akter',
            lastnameh:'Homeless kid'
        },
        taka:{
            collected:20000,
            need:50000
        },
        on:'The world’s poorest people bore the steepest costs of the pandemic. Their income losses were twice as high as the world’s richest, and global inequality rose for the first time in decades. The poorest also faced large setbacks in health and education which, if left unaddressed by policy action, will have lasting consequences for their lifetime income prospects.',
        news:'The World Bank Group’s goals are to end extreme poverty and promote shared prosperity. This mission underpins our analytical, operational, and convening work in about 140 client countries.'

    },
    {
        id:uuidv4(),
        img:Img[0],
        name:'Maxwale Done',
        lastname:'Humanitarian help',
        hdes:'Hungry and needs your help to his him',
        sendHelp:{
            imgn:Img[2],
            imgn1:Img[5],
            imgn2: Img[6],
            nameh:'Daniel Cavaretti',
            lastnameh:'Sao Paulo'
        },
        taka:{
            collected:40000,
            need:50000
        },
        on:'The recovery since then has been uneven. Rising food and energy prices—fueled in part by the war in Ukraine and by climate shocks and conflict—have hindered a swift recovery. By the end of 2022, as many as 685 million people could still be living in extreme poverty.',
        news:'For three decades, the number of people living in extreme poverty— defined as those who live on less than $2.15 per person per day at 2017 purchasing power parity—was declining. But the trend was interrupted in 2020, when poverty rose due to the disruption caused by the COVID-19 crisis. The number of people in extreme poverty rose by 70 million to more than 700 million people. The global extreme poverty rate reached 9.3 percent, up from 8.4 percent in 2019.'

    },
    {
        id:uuidv4(),
        img:Img[3],
        name:'Asraful Done',
        lastname:'Humanitarian help',
        hdes:'Madical needs your help to his him',
        sendHelp:{
            imgn:Img[6],
            imgn1:Img[5],
            imgn2: Img[4],
            nameh:'Gones Devail',
            lastnameh:'Main Through'
        },
        taka:{
            collected:40000,
            need:80000
        },
        on:'The recovery since then has been uneven. Rising food and energy prices—fueled in part by the war in Ukraine and by climate shocks and conflict—have hindered a swift recovery. By the end of 2022, as many as 685 million people could still be living in extreme poverty.',
        news:'For three decades, the number of people living in extreme poverty— defined as those who live on less than $2.15 per person per day at 2017 purchasing power parity—was declining. But the trend was interrupted in 2020, when poverty rose due to the disruption caused by the COVID-19 crisis. The number of people in extreme poverty rose by 70 million to more than 700 million people. The global extreme poverty rate reached 9.3 percent, up from 8.4 percent in 2019.'

    }

]

export default helpcard



