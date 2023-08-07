import React from 'react';
import { Box} from '@mui/material';
import Post from './Post';
import blog01 from '../../assets/blog01.jpg'
import blog02 from '../../assets/blog02.jpg';
import blog03 from '../../assets/blog03.jpg';
import blog04 from '../../assets/blog04.jpg';
import blog05 from '../../assets/blog05.jpg';

const blogData=[
  {
    avatar:'S',
    author:'Salim Ben Salah',
    date:'18 Sep 2022',
    titre:'A Day in the Life of a Blood Donor',
    image:{blog01},
    content:'In this blog, we will take a behind-the-scenes look at the life of a blood donor. Every day, thousands of individuals selflessly give the gift of life, saving countless patients in need. Lets explore the motivations, experiences, and impact of this noble act.',
    title:'Behind the Scenes: A Day in the Life of a Blood Donor',
    expandedContent:'Morning: A Sense of Purpose With a sense of purpose, our donor begins the day, driven by personal experiences or a desire to help others. Their commitment to making a difference is unwavering.Preparation: Health and Safety First Before heading to the blood donation center, our donor ensures they are in good health. Adequate rest, a nutritious breakfast, and proper hydration are essential preparations .Arrival: Warm Welcomes and Smiles .At the center, the donor is welcomed by friendly staff and volunteers. The comforting atmosphere helps them feel at ease and ready to contribute.',
  },

  {
    avatar:'A',
    author:'Ahmed Ben Ali',
    date:'22 Oct 2022',
    titre:'The Power of a Single Pint',
    image:{blog02},
    content:'Understanding the Impact of Blood Donation : In our fast-paced world, the act of donating blood often goes unnoticed, yet its impact is immeasurable. Every pint of blood donated has the power to save lives, making a profound difference to patients in need. Lets explore the true significance of blood donation and the lives it touches.',
    title:'The Power of a Single Pint: Understanding the Impact of Blood Donation',
    expandedContent:'When you donate a single pint of blood, you provide a lifeline to those facing critical medical conditions, undergoing surgeries, or recovering from traumatic injuries. Each donation is divided into vital components like red cells, plasma, and platelets, which are then used to treat different medical conditions.',
  },

  {
    avatar:'A',
    author:'Aliya Kammoun',
    date:'15 Jan 2023',
    titre:'Blood Types Demystified',
    image:{blog03},
    content:'What You Need to Know: Blood is a vital component of our bodies, and each person has a specific blood type. Understanding blood types is essential for medical purposes, such as transfusions and organ transplants. In this blog, we will demystify blood types and explain the significance of knowing your blood type.',
    title:'Blood Types Demystified: What You Need to Know',
    expandedContent:'There are four main blood types: A, B, AB, and O. These blood types are determined by the presence or absence of certain antigens on the surface of red blood cells. Additionally, blood is categorized as Rh-positive (+) or Rh-negative (-) based on the presence of the Rh antigen.',
  },

  {
    avatar:'N',
    author:'Nadine Khalfallah',
    date:'12 Avr 2023',
    titre:'The Science of Saving Lives',
    image:{blog04},
    content:'How Blood Transfusions Work: Blood transfusions are a critical medical intervention that has been saving lives for centuries. Whether used in emergencies, surgeries, or to support patients with chronic illnesses, blood transfusions are an essential part of modern healthcare. In this blog, we will explore the science behind blood transfusions and understand how this life-saving process works.',
    title:'The Science of Saving Lives: How Blood Transfusions Work',
    expandedContent:'Blood transfusions are a remarkable testament to medical sciences ability to save lives. The careful matching of blood types and rigorous safety measures make this life-saving procedure possible. By understanding the science behind blood transfusions, we can appreciate the importance of blood donation and the remarkable impact it has on patients in need. Through the selfless act of donating blood, individuals become heroes, contributing to the chain of life that connects us all.',
  },

  {
    avatar:'S',
    author:'Salim Ben Salah',
    date:'09 May 2023',
    titre:'Challenges and Triumphs: Blood Donation in Remote Communities',
    image:{blog05},
    content:'While blood donation plays a crucial role in saving lives, access to this life-saving resource can be a significant challenge in remote communities. Despite the obstacles, there have been remarkable triumphs in overcoming these barriers to ensure that even the most distant and underserved areas have access to blood when needed. In this blog, we will explore the challenges faced and the successes achieved in blood donation efforts in remote communities.',
    title:'Challenges and Triumphs: Blood Donation in Remote Communities',
    expandedContent:'Blood donation in remote communities presents unique challenges, but efforts to overcome these obstacles have yielded impressive triumphs. The determination to ensure equitable access to blood products has resulted in innovative solutions, community involvement, and advancements in technology. By acknowledging the challenges and building on the successes, we can continue to improve blood donation in remote areas and, ultimately, save more lives. Together, as a united force, we can bridge the gap and make a significant impact on the health and well-being of those living in even the most distant corners of our world.',
  }

]

const Feed=()=> {
 
  return (
    <Box flex={4} p={2}>
      {blogData.map((item,index)=>(
      <Post
        avatar={item.avatar}
        author={item.author}
        date={item.date}
        titre={item.titre}
        image={item.image}
        content={item.content}
        title={item.title}
        expandedContent={item.expandedContent}
        key={item.title +index}
      >
      </Post>))}
    </Box>
  )
}

export default Feed