import axios from 'axios';



export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer -qCHkySPSe2WODQyDFbVe6VsCM-EKj94XovEbvnnqVct445Z8mAoxcCRMDxEmbU-Hv4gg5ixu4UpXQiym_T6SfZ0v0hDSqMStJLU85u8ykoUKOemf1qa5UWdh1WJX3Yx'
    }
});