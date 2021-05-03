function myFunction(){
    var i, arr, j;
    for(i=0;i<arr.length;i++)
    {
        for(j=0; j<arr.length; j++)
        {
            if(i==j)
            {
                continue;
            }
        }if(arr[i]== arr[j])
        {
            break;
        }
    }if(j==arr.length)
    {
        console.write(arr[i]+"");
    }
}