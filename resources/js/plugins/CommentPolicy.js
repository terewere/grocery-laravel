export default class CommentPolicy
{
    static create(user)
    {
        // return user.role === 'editor';
    }

    static view(user, comment)
    {
        return true;
    }

    static delete(user, comment)
    {
        return user.id === comment.user_id;
    }

    static update(user, comment)
    {
        return user.id === comment.user_id;
    }
    
}