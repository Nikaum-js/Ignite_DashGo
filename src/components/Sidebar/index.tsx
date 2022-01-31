import { Box, Stack } from "@chakra-ui/react";

import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from 'react-icons/ri'
import { NavLink } from "../Sidebar/NavLink";
import { NavSection } from "../Sidebar/NavSection";

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title="GERAL">
          <NavLink icon={RiDashboardLine} section="Dashboard" />
          <NavLink icon={RiContactsLine} section="Usuários" />
        </NavSection>

        <NavSection title="AUTOMAÇÃO">
          <NavLink icon={RiInputMethodLine} section="Formulários" />
          <NavLink icon={RiGitMergeLine} section="Automação" />
        </NavSection>
      </Stack>
    </Box>
  );
}