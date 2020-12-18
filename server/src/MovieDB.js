class Db {

    constructor(mongoose) {
        const reviewSchema = new mongoose.Schema({
            score: Float32Array,
            description: String
        })

        this.reviewModel = mongoose.model('review', reviewSchema);

        const movieSchema = new mongoose.Schema({
            title: String,
            description: [String],
            year: Float32Array,
            reviews: [reviewSchema]
        });


        // This model is used in the methods of this class to access kittens
        this.movieModel = mongoose.model('movie', movieSchema);

    }

    async getMovies() {
        try {
            return await this.movieModel.find({});
        } catch (error) {
            console.error("getMovies:", error.message);
            return {};
        }
    }
    async getMovies(id) {
        try {
            return await this.movieModel.findById(id);
        } catch (error) {
            console.error("getMovies:", error.message);
            return {};
        }
    }

    async createMovie(newMovie) {
        const movie = new this.movieModel(newMovie);
        return movie.save();
    }

    async addHobby(movieId, hobby) {
        const kitten = await this.getKitten(kittenId);
        kitten.hobbies.push(hobby);
        return kitten.save();
    }

    /**
     * This method adds a bunch of test data if the database is empty.
     * @param count The amount of kittens to add.
     * @returns {Promise} Resolves when everything has been saved.
     */
    async bootstrap(count = 10) {
        const hobbies = ['sleeping', 'purring', 'eating', 'people watching'];
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        function getRandomName() {
            return ['Garfield', 'Tom', 'Felix', 'Snowball'][getRandomInt(0, 3)]
        }

        function getRandomHobbies() {
            const shuffled = hobbies.sort(() => 0.5 - Math.random());
            return shuffled.slice(0, getRandomInt(1, shuffled.length));
        }

        const l = (await this.getMovies()).length;
        console.log("Kitten collection size:", l);

        if (l === 0) {
            const promises = [];

            for (let i = 0; i < count; i++) {
                let movie = new this.movieModel({
                    title: getRandomName(),
                    description: getRandomHobbies()
                });
                promises.push(movie.save());
            }

            return Promise.all(promises);
        }
    }
}

module.exports = mongoose => new Db(mongoose);
