#include <bits/stdc++.h>
using namespace std;

int main() 
{
    int n, k;
    cin >> n >> k;
    
    set<char> S;
    
    for(char i = 1; i<=k; i++) S.insert(i+'0');
    
    for(int i=k; i<n; i++)
    {       
        set<char> temp = S;        
        
        for(int j=1; j<=5; j++)
        {
            int num = i*j;
            string s = to_string(num);
            
            for(auto c : s)
            {
                if(temp.count(c) == 0) 
                {
                    goto next;
                }
                temp.erase(c);
            }
            if(temp.empty()) 
            {
                cout << i << endl;
                break;
            }
        }            
        next:
        continue;
    }
    return 0;
}