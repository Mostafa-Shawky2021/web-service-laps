import Article from "../models/Article.js"

// TODO::CREATE ARTICLE CONTROLLER
export const createArticle = async (req, res, next) => {
    const newArticle = new Article({...req.body, date: Date.now()});

    try {
        const savedArticle = await newArticle.save()
        res.status(201).json(savedArticle)
    } catch (error) { next(error) }
}

// TODO::UPDATE ARTICLE CONTROLLER
export const updateArticle = async (req, res, next) => {
    try {
        const updatedArticle = await Article.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body }, 
            { new: true }
        )
        res.status(201).json(updatedArticle)
    } catch (error) { next(error) }
}

// TODO::DELETE ARTICLE CONTROLLER
export const deleteArticle = async (req, res, next) => {
    try {
        await Article.findByIdAndDelete(req.params.id)
        res.status(201).json("Article has been deleted!")
    } catch (error) { next(error) }
}

// TODO::GET ARTICLE CONTROLLER
export const getArticle = async (req, res, next) => {
    try {
        const article = await Article.findById(req.params.id)
        res.status(201).json(article)
    } catch (error) { next(error) }
}

// TODO::GET ALL ARTICLE CONTROLLER
export const getAllArticles = async (req, res, next) => {
    try {
        const articles = await Article.find()
        res.status(201).json(articles)
    } catch (error) { next(error) }
}