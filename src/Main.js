import React from 'react'
import heroImage from './assets/restauranfood.jpg';
import bruchetta from './assets/bruchetta.svg';
import greekSalad from './assets/greek salad.jpg';
import lemonDessert from './assets/lemon dessert.jpg';
import { Box, Center, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react';

const specials = [
    {
        name: 'Greek Salad',
        image: greekSalad,
        description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
        amount: '$12.99'
    },
    {
        name: 'Bruchetta',
        image: bruchetta,
        description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ',
        amount: '$ 5.99'
    },
    {
        name: 'Lemon Dessert',
        image: lemonDessert,
        description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
        amount: '$ 5.00'
    }
]

function Main() {
    return (
        <main>
            <>
                <section id="hero">
                    <Grid templateColumns={'2.5fr 2fr'} gap={20}>
                        <Center>
                            <GridItem padding={20}>
                                <Heading as={'h1'} className='title' marginTop={0}>Little Lemon</Heading>
                                <Heading as={'h3'} className='sub-heading'>Chicago</Heading>
                                <Text className='content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                                <button>Reserve a Table</button>
                            </GridItem>
                        </Center>
                        <Center>
                            <GridItem padding={20}>
                                <Image src={heroImage} width="90%" alt="hero" />
                            </GridItem>
                        </Center>
                    </Grid>
                </section>
                <section>

                    <Grid padding={20}>
                        <GridItem><Heading as={'h1'} fontSize={34}>This week specials!</Heading></GridItem>
                        <GridItem textAlign={'right'} className='flex-row flex-align-center flex-justify-end'>
                            <div className='flex-column'>
                                <button>Online Menu</button>
                            </div>
                        </GridItem>
                        <GridItem colSpan={2}>
                            <Grid templateColumns='repeat(auto-fill, minmax(320px, 1fr))' gap={50}>
                                {specials.map((item) => {
                                    return <GridItem as={'article'} className='card little-lemon-special'>
                                        <Grid gridTemplateRows={'170px 2fr'}>
                                            <GridItem>
                                                <Image h={170} src={item.image} width={'100%'} alt={item.name} />
                                            </GridItem>
                                            <GridItem>
                                                <Box padding={15}>
                                                    <Grid templateColumns='2fr 1fr' gridTemplateRows='30px 150px 50px'>
                                                        <GridItem>
                                                            <><Heading textAlign="left" as="h3" size="md" margin={0}>{item.name}</Heading></>
                                                        </GridItem>
                                                        <GridItem>
                                                            <><Heading textAlign="right" as="h3" size="md" margin={0}>{item.amount}</Heading></>
                                                        </GridItem>
                                                        <GridItem colSpan={2}>
                                                            <Text>{item.description}</Text>
                                                        </GridItem>
                                                        <GridItem className='flex-row flex-align-center'>
                                                            <button>Order a delivery</button>
                                                        </GridItem>
                                                    </Grid>
                                                </Box>
                                            </GridItem>
                                        </Grid>
                                    </GridItem>
                                })}
                            </Grid>
                        </GridItem>
                    </Grid>
                </section>
            </>
        </main>
    )
}

export default Main