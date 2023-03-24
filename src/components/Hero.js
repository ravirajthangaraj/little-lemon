import React from 'react'
import heroImage from '../assets/restauranfood.jpg';
import { Center, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react';
import styles from './Hero.module.css';

function Hero() {
    return (
        <Grid templateColumns={'2.5fr 2fr'} gap={20}>
            <Center>
                <GridItem padding={20}>
                    <Heading as={'h1'} className={styles.title} marginTop={0}>Little Lemon</Heading>
                    <Heading as={'h3'} className={styles.subHeading}>Chicago</Heading>
                    <Text className={styles.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                    <button>Reserve a Table</button>
                </GridItem>
            </Center>
            <Center>
                <GridItem padding={20}>
                    <Image src={heroImage} width="90%" alt="hero" />
                </GridItem>
            </Center>
        </Grid>
    )
}

export default Hero