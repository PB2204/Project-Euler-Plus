#include <bits/stdc++.h>
using namespace std;

map<int, int> memo;

string Divide(int num)
{
    string ans = "";
    int one = 1;
    int rem = -1;

    map<int, int> remainders;
    int i = 0;
    
    while(rem != 0)
    {
        one *= 10;
        int count = 0;       
        
        int next = (int)floor(one / num);
        int prod = num * next;        
        one -= prod;           
        rem = one % num;        
        
        if(remainders.count(rem) != 0)
        {
            return ans.substr(remainders[rem]);
        }
        ans += to_string(next);       
        remainders[rem] = i;
        i++;
    }
    return ""; 
}

void ComputeRepeatLengths()
{
    string longest = "3";
    int index = 3;
    
    for(int i=3; i<10000; i++)
    {
        if(i < 7)
        {
            memo[i+1] = 3;
            continue;
        }
        memo[i] = index;
        
        if(i % 2 == 1) 
        {
            string s = Divide(i);

            if(s.size() > longest.size())
            {
                longest = s;
                index = i;
            }
        }
    } 
}


int main()
{
    ComputeRepeatLengths();    

    int t;
    cin >> t;
    
    while(t--)
    {
        int n;
        cin >> n;
                       
        cout << memo[n] << endl;       
    }
    return 0;
}