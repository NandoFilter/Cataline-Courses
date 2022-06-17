interface Post {
    id: number
    title: string
    description: string
}

type PostPick = Pick<Post, 'id' | 'title'> // Pick
type PostOmit = Omit<Post, 'id' | 'title'> // Omit

let pick: PostPick // Contém id e title
let omit: PostOmit // Contém apenas description


