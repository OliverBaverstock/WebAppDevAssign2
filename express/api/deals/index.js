import express from 'express';
import stubAPI from './stubAPI';

const router = express.Router();

// get all deals
router.get('/', (req, res) => {
  const deals = stubAPI.getAll();
  res.send({deals: deals});
});


// Add a deal
router.post('/', (req, res) => {
    const newDeal = req.body;

    if (newDeal && stubAPI.add(newDeal.dishName, newDeal.restName, newDeal.price, newDeal.phone, newDeal.picture)) {
         return res.status(201).send({message: 'Deal Created'});
    }
    return res.status(400).send({message: 'Unable to find Deal in request.'});
});

// get a deal
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const post = stubAPI.getDeal(id);

       if (deal) {
               return res.status(200).send(deal);
              }
              return res.status(404).send({message: `Unable to find Deal ${id}`});
});

// upvote a deal
router.post('/:id/upvote', (req, res) => {
    const id = req.params.id;
           if (stubAPI.upvote(id)) {
                return res.status(200).send({message: `Post ${id} Upvoted`});
           }
           return res.status(404).send({message: `Unable to find Post ${id}`});
});

export default router;