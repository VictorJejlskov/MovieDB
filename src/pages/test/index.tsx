import type { MyTable } from "@prisma/client";
import { prisma } from "~/server/db";
const example = () => {
    const table: MyTable = { id: "1", name: "Test:)", createdAt: new Date(), updatedAt: new Date() }
    prisma.myTable.create({
        data: table
    })
    prisma.myTable.createMany({
        data: [table, table, table]
    })

    
    
    return(
        <h1>Hello World!</h1>
    )
}
export default example;
