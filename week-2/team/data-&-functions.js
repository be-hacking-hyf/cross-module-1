var team_name = "EEG";
var team_members = ["Mesut","Nelson","Ramiz","Jamal"];

function print_team_name(TeamName)
{
    console.log("Team name is : " + TeamName);
}
function print_team_members(TeamMembers)
{
    console.log("Team members are : ");
    for(let i=0; i<TeamMembers.length ;i++)
    {
        console.log(TeamMembers[i]);
    }
}
function introduction(TeamName, TeamMembers)
{
    print_team_name(TeamName);
    print_team_members(TeamMembers);
}