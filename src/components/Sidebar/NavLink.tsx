import { Icon, Link as LinkChakra, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  section: string;
  href: string;
}

export function NavLink({ icon, section, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <LinkChakra display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">{section}</Text>
      </LinkChakra>
    </ActiveLink>
  );
}