import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import Hero from "../landing_page/home/Hero";
import { describe } from 'node:test';

//test suite
describe("Hero component",() =>{
    test("Render Hero image",() =>{
        render(<Hero/>);
        const HeroImage =screen.getByText('Hero')
        expect(HeroImage).toBeInTheDocument()
        expect(HeroImage).toHaveAttribute("src",'/media/homeHero.png')
    })
})