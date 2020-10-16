import { mapGetters } from "vuex";
export default {

    data() {
        let sortOrders = {};

        let columns = [
            { width: "33%", label: "Deadline", name: "deadline" },
            { width: "33%", label: "Budget", name: "budget" },
            { width: "33%", label: "Status", name: "status" }
        ];

        columns.forEach(column => {
            sortOrders[column.name] = -1;
        });
        return {
            columns: columns,
            sortKey: "deadline",
            sortOrders: sortOrders,
            perPage: ["10", "20", "30", "100", "500"],

            pagination: {
                lastPage: "",
                currentPage: "",
                total: "",
                lastPageUrl: "",
                nextPageUrl: "",
                prevPageUrl: "",
                from: "",
                to: ""
            }
        };
    },

    computed: {
        ...mapGetters(['getSpeakerData']),

    },

    async created() {
        // this.getData();
        if (this.getSpeakers.length == 0) {
            await this.fetchSpeakers();
        }

        this.mergeData()
            // this.isLoading = false

    },

    methods: {

        async getData(url = this.url) {

            await this.fetchSpeakers(url);
            this.mergeData()

        },

        mergeData() {
            let responseData = this.getSpeakers;
            if (this.getSpeakerData.draw == responseData.meta.draw) {
                let data = responseData.data;

                for (let index = 0; index < data.length; index++) {
                    data[index].no = index + 1;
                }

                this.speakers = data;
                this.configPagination(responseData);
            }
        },

        configPagination(data) {
            this.pagination.lastPage = data.meta.last_page;
            this.pagination.currentPage = data.meta.current_page;
            this.pagination.total = data.meta.total;
            this.pagination.lastPageUrl = data.links.last;
            this.pagination.nextPageUrl = data.links.next;
            this.pagination.prevPageUrl = data.links.prev;
            this.pagination.from = data.meta.from;
            this.pagination.to = data.meta.to;
        },
        sortBy(key) {
            this.sortKey = key;
            this.sortOrders[key] = this.sortOrders[key] * -1;
            this.getSpeakerData.column = this.getIndex(this.columns, "name", key);
            this.getSpeakerData.dir = this.sortOrders[key] === 1 ? "asc" : "desc";
            this.getData();
        },
        getIndex(array, key, value) {
            return array.findIndex(i => i[key] == value);
        },



    }

}