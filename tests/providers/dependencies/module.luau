local TEST_NAME = "DEPENDENCIES-TEST"
local Dep1 = require(script.Parent.dep1)

local function Init()
    print(`{TEST_NAME}: Module (third)`)
end

return {
    Init = Init,
    Uses = { Dep1 }
}
