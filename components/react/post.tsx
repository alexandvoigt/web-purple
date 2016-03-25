import * as React from "react";

import * as Card from "material-ui/lib/card/card";
import * as CardHeader from "material-ui/lib/card/card-header";
import * as CardTitle from "material-ui/lib/card/card-title";
import * as CardText from "material-ui/lib/card/card-text";

import {IUser} from '../vo/index'

export interface IPostProps {
    title: string;
    text: string;
    author: IUser;
    date: Date;
}

const PostItem = ({title, text, date, author}: IPostProps) => (
    <Card style={{marginBottom: 10}}>
        <CardHeader
            title={ author.vkDisplayName }
            subtitle={ date.toLocaleDateString() }
            avatar={author.vkPhotoUrl }
        />
        <CardTitle title={title}/>
        <CardText>
            {text}
        </CardText>
    </Card>
);

export default PostItem;