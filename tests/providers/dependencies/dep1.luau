local TEST_NAME = "DEPENDENCIES-TEST"
local Dep2 = require(script.Parent.dep2)

local function Init()
    print(`{TEST_NAME}: Dependency 1, using Dependency 2 (second)`)
end

return {
    Init = Init,
    Uses = { Dep2 }
}
