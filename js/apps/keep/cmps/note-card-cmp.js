import noteCardTools from './note-card-tools-cmp.js'

export default {
    template: `
                <section class="note-card">
                        <div class="note-content">
                            <div v-if="note.type === 'list'" class="note-card-list">List Goes Here</div>
                                <div v-if="note.type === 'vid'" class="note-card-vid" >
                                
                                </div>

                            <img v-if="note.type === 'img'" class="note-card-img" :src="note.data.txt"> 

                            <div class="note-card-text"> 
                            <h2>{{note.data.title}}</h2>    
                                <div  v-if="note.type === 'txt'">
                                {{note.data.txt}}
                                </div>
                        
                            </div>
                        </div>
                        <note-card-tools :noteid="note.id"></note-card-tools>
                </section>`,
    props: ['note'],
    components: {
        noteCardTools
    },
    data() {
        return {
        }
    },
    computed: {
        noteContent() {
        }
    },
    created() {
    },
}