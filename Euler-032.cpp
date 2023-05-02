#include <bits/stdc++.h>
using namespace std;

int n;
int ans = 0;

vector<string> nums = {"1"};


void GetNumbers()
{
    string num = "1";

    while(num.length() <= n/2)
    {    
        num.back()++;
        
        while(num.find(num.back()) != num.rfind(num.back()))
        {
            num.back()++;            
        }        
        
        int carry = (num.back()-'0') / (n+1);            
        int index = num.size()-2;

        while(carry)
        {
            if(index < 0)
            {
                num = string("123456789").substr(0, num.size()+1);
                break;
            }
            num[index+1] = '1';
            num[index]++;
            carry = (num[index]-'0') / (n+1);
            index--;
        }
        bool check[n+1] = {0};
        
        for(int i=0; i<num.size(); i++)
        {
            int digit = num[i] - '0';
            if(check[digit] == 1) break;            
            else if(i == num.size()-1) nums.push_back(num);
            
            check[digit] = true;
        }
    }    
}


int main() 
{
    cin >> n;   

    GetNumbers();
    string compare = string("123456789").substr(0, n);    
    
    for(int i=nums.size()-1; i >= n/2; i--)
    {        
        int product = stoi(nums[i]);                
        
        for(int j=0; nums[j].size() < nums[i].size() ; j++)
        {
            int factor = stoi(nums[j]);
            int quotient = product / factor;
            
            if(product % factor != 0) continue;                       

            string s = nums[i] + nums[j] + to_string(quotient);            
            sort(s.begin(), s.end());

            if(s == compare)
            {
                ans += product;
                break;
            }        
        }
    }
    cout << ans << endl;
    return 0;
}