export default class TaskPolicy
{
    static create(user)
    {
        // return user.role === 'editor';
    }

    static view(user, task)
    {
        return true;
    }

    static delete(user, task)
    {
        return user.id === task.created_by;
    }

    static update(user, task)
    {
        return user.id === task.created_by;
    }
    
}