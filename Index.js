const lokaleUrl = "https://checkin123.azurewebsites.net/api/Lokale"
const kortUrl = "https://checkin123.azurewebsites.net/api/Kort"
const quoteUrl = "https://strangerthings-quotes.vercel.app/api/quotes"



Vue.createApp({
    data(){
        return{
            lokaler: [],
            lokale: null,
            lokaleId: "",
            singleLokale: null,
            korts: [],
            kort: null,
            cardId: 0,
            kort_Ejer: "",
            lokaleKort: [],
            idToDelete: null,
            getMessage: "",
            deleteMessage: "",
            addData: { lokaleId: "", cardId: "" },
            addMessage:"",
            userName: null,
            password: null,
            convertQuote:  null,


        }
    },
    async created() {
        try {
            const response = await axios.get(lokaleUrl)
            this.lokaler = await response.data

        }catch (ex) {
            alert(ex.message)
        }
        try {
            const response = await axios.get(kortUrl)
            this.korts = await response.data

        }
        catch (ex) {
            alert(ex.message)
        }
    },

    methods: {
        async getLokaleById(id) {
            const url = lokaleUrl + "/" + id
            try {
                const response = await axios.get(url)
                this.singleLokale = await response.data
            } catch (ex) {
                alert(ex.message)
            }
        },
        async deleteLokaleById(idToDelete) {
            const url = lokaleUrl + "/" + idToDelete
            try {
                response = await axios.delete(url)
                this.deleteMessage = response.status + " " + response.statusText
            } catch (ex) {
                alert(ex.message)
            }
        },
        async addLokale() {
            try {
            response = await axios.post(lokaleUrl, this.addData)
            this.addMessage = "response " + response.status + " " + response.statusText
            } catch (ex) {
            alert(ex.message)
            }
        },
        async quote(){
            try {
                response = await axios.get(quoteUrl)
                this.convertQuote = await response.data
                } catch (ex) {
                alert(ex.message)
                }
            },
    },     
}).mount("#app")

