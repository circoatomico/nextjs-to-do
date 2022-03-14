import { NextApiRequest, NextApiResponse } from "next";

const apiUser = (req: NextApiRequest, res: NextApiResponse) => {

    const users = [
        {key: 1, name: 'luiz'},
        {key: 2, name: 'amanda'},
        {key: 3, name: 'leide'},
        {key: 4, name: 'aline'}
    ]

    return res.json(users)
}

export default apiUser;