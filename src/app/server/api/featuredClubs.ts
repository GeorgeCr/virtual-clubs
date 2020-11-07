import { Application, Request, Response } from "express";

const FEATURED_CLUBS = [{
    title: 'Sports',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, fugiat?',
    imgSource: ''
},
{
    title: 'Programming',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, fugiat?',
    imgSource: ''
},
{
    title: 'Music',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, fugiat?',
    imgSource: ''
}];

const featuredClubs = (app: Application) => {
    app.get('/featuredClubs', (req: Request, res: Response) => {
        setTimeout(() => {
            res.json(FEATURED_CLUBS);
        }, 1500);
    });
}

export default featuredClubs;