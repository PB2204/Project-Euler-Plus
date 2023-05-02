#include <bits/stdc++.h>
using namespace std;

map<int, int> memo;

void NextTerm(vector<int> &num, vector<int> prev)
{   
    int carry = 0;
    int index = 4999;

    while(index >= 0)
    {
        int sum = num[index] + prev[index] + carry;
            
        if(sum >= 10)
        {
            carry = sum/10;
            num[index] = sum%10;
        }
        else 
        {
            carry = 0;
            num[index] = sum;
        }
        index--;
    }
}

int main() 
{
    vector<int> num(5000, 0);
    vector<int> prev = num;
    num[4999] = 1;

    int digits = 0, index = 1;

    while(digits < 5000)
    {                        
        vector<int> temp = num;
        NextTerm(num, prev);

        for(int i=0; i<5000; i++)
        {
            if(num[i] != 0) 
            {
                digits = 5000 - i;

                if(memo.count(digits) == 0) 
                {
                    memo[digits] = index + 1;
                }
                break;
            }
        }
        prev = temp;  
        index++;
    }           
    
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